import {ImageSourcePropType} from 'react-native';

export type OnboardingProps = undefined;
export type HomeProps = undefined;

export type RootStackParamList = {
  Onboarding: OnboardingProps;
  Home: HomeProps;
};

export type OnboardingDataType = {
  id: string;
  source: ImageSourcePropType;
};

export type PopularDataType = {
  id: string;
  source: ImageSourcePropType;
  title: string;
  price: string;
};

export type RecommendDataType = {
  id: string,
  source: ImageSourcePropType,
  title: string,
  category: string,
  rating: number
}
