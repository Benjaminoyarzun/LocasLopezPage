import { Popover, Button, Text } from "@nextui-org/react";
export const CustomPopover = ({children, title}) => {

    return ( 
        <Popover isBordered disableShadow >
      <Popover.Trigger>
        <Button auto flat > {title}</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Text css={{ p: "$10" }}>{children}</Text>
      </Popover.Content>
    </Popover>

     );
}
 

