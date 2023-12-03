import { ChevronLeftIcon,IconButton } from "native-base";
import { useNavigation } from "@react-navigation/native";

export const IconBack = () => {
const navigation = useNavigation();
    return (
        <IconButton
        icon={<ChevronLeftIcon size="md" />}
        onPress={() => navigation.goBack()}
        />
    )



}