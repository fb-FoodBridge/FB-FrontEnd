export interface OptionCategoryProps {
    label: string;
    type: 'restaurant' | 'organization' | 'donation'
    onClick?: () => void;
    isSelected?: boolean;
}