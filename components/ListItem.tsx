type Props = {
    label: string;
    detail?: React.ReactNode;
    onClick?: () => void;
    swipeToDelete?: boolean;
    onDelete?: () => void;
    isDestructive?: boolean;
}

export const ListItem = ({
    label,
    detail?,
    onClick?,
    swipeToDelete?,
    onDelete?,
    isDestructive?,
}: Props) => (

);