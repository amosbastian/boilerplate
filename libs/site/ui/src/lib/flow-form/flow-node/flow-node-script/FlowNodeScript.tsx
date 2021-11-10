import { UiNode, UiNodeScriptAttributes } from "@ory/kratos-client";
import * as React from "react";

export interface FlowNodeScriptProps {
  node: UiNode;
  attributes: UiNodeScriptAttributes;
}

export function FlowNodeScript({ attributes }: FlowNodeScriptProps) {
  React.useEffect(() => {
    const script = document.createElement("script");

    script.async = true;
    script.setAttribute("data-testid", `node/script/${attributes.id}`);
    script.src = attributes.src;
    script.async = attributes.async;
    script.crossOrigin = attributes.crossorigin;
    script.integrity = attributes.integrity;
    script.referrerPolicy = attributes.referrerpolicy as React.HTMLAttributeReferrerPolicy;
    script.type = attributes.type;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [attributes]);

  return null;
}

export default FlowNodeScript;
