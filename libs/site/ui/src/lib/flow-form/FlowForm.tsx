import { Box, Center, Collapse, Spinner } from "@chakra-ui/react";
import { getNodeId, isUiNodeInputAttributes } from "@ory/integrations/ui";
import {
  SelfServiceLoginFlow,
  SelfServiceRecoveryFlow,
  SelfServiceRegistrationFlow,
  SelfServiceSettingsFlow,
  SelfServiceVerificationFlow,
  SubmitSelfServiceLoginFlowBody,
  SubmitSelfServiceRecoveryFlowBody,
  SubmitSelfServiceRegistrationFlowBody,
  SubmitSelfServiceSettingsFlowBody,
  SubmitSelfServiceVerificationFlowBody,
  UiNode,
} from "@ory/kratos-client";
import { Component, FormEvent } from "react";
import { FlowMessages } from "./flow-messages/FlowMessages";
import { FlowNode } from "./flow-node/FlowNode";

export type Values = Partial<
  | SubmitSelfServiceLoginFlowBody
  | SubmitSelfServiceRegistrationFlowBody
  | SubmitSelfServiceRecoveryFlowBody
  | SubmitSelfServiceSettingsFlowBody
  | SubmitSelfServiceVerificationFlowBody
>;

export type FlowMethods = "oidc" | "password" | "profile" | "totp" | "webauthn" | "link" | "lookup_secret";

export type Props<T> = {
  // The flow
  flow?:
    | SelfServiceLoginFlow
    | SelfServiceRegistrationFlow
    | SelfServiceSettingsFlow
    | SelfServiceVerificationFlow
    | SelfServiceRecoveryFlow;
  // Only show certain nodes. We will always render the default nodes for CSRF tokens.
  only?: FlowMethods;
  // Is triggered on submission
  onSubmit: (values: T) => Promise<void>;
  // Do not show the global messages. Useful when rendering them elsewhere.
  hideGlobalMessages?: boolean;
  flowLoading: boolean;
};

function emptyState<T>() {
  return {} as T;
}

type State<T> = {
  values: T;
  isLoading: boolean;
};

export class FlowForm<T extends Values> extends Component<Props<T>, State<T>> {
  constructor(props: Props<T>) {
    super(props);
    this.state = {
      values: emptyState(),
      isLoading: false,
    };
  }

  componentDidMount() {
    this.initializeValues(this.filterNodes());
  }

  componentDidUpdate(prevProps: Props<T>) {
    if (prevProps.flow !== this.props.flow) {
      // Flow has changed, reload the values!
      this.initializeValues(this.filterNodes());
    }
  }

  initializeValues = (nodes: Array<UiNode> = []) => {
    // Compute the values
    const values = emptyState<T>();
    nodes.forEach((node) => {
      // This only makes sense for text nodes
      if (isUiNodeInputAttributes(node.attributes)) {
        if (node.attributes.type === "button" || node.attributes.type === "submit") {
          // In order to mimic real HTML forms, we need to skip setting the value
          // for buttons as the button value will (in normal HTML forms) only trigger
          // if the user clicks it.
          return;
        }
        values[node.attributes.name as keyof Values] = node.attributes.value;
      }
    });

    // Set all the values!
    this.setState((state) => ({ ...state, values }));
  };

  filterNodes = (): Array<UiNode> => {
    const { flow, only } = this.props;
    if (!flow) {
      return [];
    }
    return flow.ui.nodes.filter(({ group }) => {
      if (!only) {
        return true;
      }
      return group === "default" || group === only;
    });
  };

  // Handles form submission
  handleSubmit = (event: MouseEvent | FormEvent) => {
    // Prevent all native handlers
    event.stopPropagation();
    event.preventDefault();

    // Prevent double submission!
    if (this.state.isLoading) {
      return Promise.resolve();
    }

    this.setState((state) => ({
      ...state,
      isLoading: true,
    }));

    return this.props.onSubmit(this.state.values).finally(() => {
      // We wait for reconciliation and update the state after 50ms
      // Done submitting - update loading status
      this.setState((state) => ({
        ...state,
        isLoading: false,
      }));
    });
  };

  render() {
    const { hideGlobalMessages, flow } = this.props;
    const { values, isLoading } = this.state;

    // Filter the nodes - only show the ones we want
    const nodes = this.filterNodes();

    return (
      <>
        {this.props.flowLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : null}
        <Collapse in={Boolean(flow)}>
          <Box
            as="form"
            action={flow?.ui.action}
            method={flow?.ui.method}
            onSubmit={this.handleSubmit}
            __css={{ "& > *:not(:last-child)": { mb: 6 }, "input[type='hidden']": { mb: 0 } }}
          >
            {!hideGlobalMessages ? <FlowMessages messages={flow?.ui.messages} /> : null}
            {nodes.map((node, k) => {
              const id = getNodeId(node) as keyof Values;
              return (
                <FlowNode
                  key={`${id}-${k}`}
                  disabled={isLoading}
                  node={node}
                  value={values[id]}
                  dispatchSubmit={this.handleSubmit}
                  setValue={(value) =>
                    new Promise((resolve) => {
                      this.setState(
                        (state) => ({
                          ...state,
                          values: {
                            ...state.values,
                            [getNodeId(node)]: value,
                          },
                        }),
                        resolve,
                      );
                    })
                  }
                />
              );
            })}
          </Box>
        </Collapse>
      </>
    );
  }
}
