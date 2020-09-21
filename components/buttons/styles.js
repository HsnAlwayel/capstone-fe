import styled from "styled-components/native";

export const JoinSessionBtn = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.secondary};
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border-color: ${(props) => props.theme.accent};
  position: absolute;
  top: 300px;
  left: 25%;
`;

export const StartSessionBtn = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.secondary};
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border-color: ${(props) => props.theme.accent};
  position: absolute;
  top: 425px;
  left: 25%;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #393e46;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: red;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #decdc3;
  border-bottom-color: #bbe1fa;
  border-bottom-width: 1px;
`;
export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #bbe1fa;
  margin-top: 30px;
  border-radius: 7px;
`;

export const AuthButtonText = styled.Text`
  color: #222831;
  font-weight: bold;
  font-size: 18px;
`;