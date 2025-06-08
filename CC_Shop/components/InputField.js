import { View, StyleSheet, TextInput } from "react-native";

const InputField = ({ text, value, onChangeText }) => {
    return (
        <View style={styles.container}>
           <TextInput
                style={styles.text}
                placeholder={text}
                placeholderTextColor="#6F6F6F"
                value={value}  // Make sure input reflects state
                onChangeText={onChangeText} // Update state when typing
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16, 
        height: 51,
        width: '91%', 
    },
    text: {
        color: "black",
        paddingLeft: 20,
        paddingTop: 16,
        paddingBottom: 16,
        fontSize: 14,
    }
});

export default InputField;
