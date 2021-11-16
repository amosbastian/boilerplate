import { CardFooter } from "@boilerplate/shared/ui";
import { useRouter } from "next/router";
import { FlowNodeInputProps } from "../flow-node-input";
import { FlowNodeInputButton } from "../flow-node-input-button/FlowNodeInputButton";
import { FlowNodeInputCheckbox } from "../flow-node-input-checkbox/FlowNodeInputCheckbox";
import { FlowNodeInputDefault } from "../flow-node-input-default/FlowNodeInputDefault";
import { FlowNodeInputSubmit } from "../flow-node-input-submit/FlowNodeInputSubmit";

export function FlowNodeInput(props: FlowNodeInputProps) {
  const { attributes } = props;
  const router = useRouter();

  const isSettingsPage = router.pathname.startsWith("/settings");

  switch (attributes.type) {
    case "hidden":
      // Render a hidden input field
      return <input type={attributes.type} name={attributes.name} value={attributes.value || "true"} />;
    case "checkbox":
      // Render a checkbox. We have one hidden element which is the real value (true/false), and one
      // display element which is the toggle value (true)!
      return <FlowNodeInputCheckbox px={isSettingsPage ? 6 : 0} {...props} />;
    case "button":
      // Render a button
      return <FlowNodeInputButton mx={isSettingsPage ? 6 : 0} {...props} />;
    case "submit":
      // Render the submit button
      return isSettingsPage ? (
        <CardFooter>
          <FlowNodeInputSubmit {...props} />
        </CardFooter>
      ) : (
        <FlowNodeInputSubmit {...props} />
      );
  }

  // Render a generic text input field.
  return <FlowNodeInputDefault px={isSettingsPage ? 6 : 0} {...props} />;
}

export default FlowNodeInput;
