import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "@/styles/colors";

type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  isDetail?: boolean;
};

export function Header({ title, subtitle, isDetail = false, ...rest }: Props) {
  return (
    <View className="mt-14 mb-12 flex flex-row justify-between align-middle">
      <View>
        <Text className="text-white font-bold text-4xl">{title}</Text>
        <Text className="text-white font-regular text-lg">{subtitle}</Text>
      </View>
      {isDetail && (
        <TouchableOpacity {...rest}>
          <MaterialIcons name="delete" size={26} color={colors.red[500]} />
        </TouchableOpacity>
      )}
    </View>
  );
}
