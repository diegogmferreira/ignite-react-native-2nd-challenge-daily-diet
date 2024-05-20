export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      homeDetail: undefined;
      newMeal: {
        id?: string | null;
      };
      confirmation: {
        isDiet: boolean;
      }
      viewMeal: {
        id: string;
      }
    }
  }
}