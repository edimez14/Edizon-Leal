import { Badge } from "@chakra-ui/react";
import DynamicIcon from "./DynamicIcon";

export default function IconBadge({ icon, radius = "sm", padding = 1 }) {
  return (
    <Badge variant="subtle" rounded={radius} className={`p-${padding}`} >
      <DynamicIcon icon={icon} size="lg" />
    </Badge>
  )
}
