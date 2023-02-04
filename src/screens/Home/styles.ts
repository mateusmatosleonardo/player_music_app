import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.WHITE_PRIMARY};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

export const Favorite = styled.Pressable`
  padding: 13px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const WrapperPlayingNow = styled.View`
  align-items: center;
`;

export const TitlePlayingNow = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Roboto_Medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.PRIMARY};
  padding-top: 12px;
`;

export const WrapperDisco = styled.View`
  align-items: center;
  width: 100%;
  margin-top: 60px;
  padding: 0px 50px;
`;

export const ContainerDisco = styled.View`
  width: 250px;
  height: 250px;
`;

export const Disco = styled.ImageBackground`
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
`;

export const CenterDisco = styled.View`
  width: 55px;
  height: 55px;
  border-radius: 55 / 2;
  background-color: ${({ theme }) => theme.colors.WHITE_PRIMARY};
`;

export const NameSong = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Roboto_Bold};
  font-size: ${RFValue(26)}px;
  color: ${({ theme }) => theme.colors.PRIMARY};
  padding-top: 30px;
`;

export const ArtistName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Roboto_Regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.PRIMARY};
  padding-top: 8px;
`;

export const WrapperActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* margin-top: 70px; */
  padding: 0px 40px;
  position: absolute;
  bottom: 35px;
`;

export const ContainerPlay = styled.Pressable`
  padding: 15px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.SECONDARY};
`;

export const Action = styled.Pressable``;
