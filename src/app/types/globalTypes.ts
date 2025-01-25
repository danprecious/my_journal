export interface State {
  openMenu: boolean;
}

export interface GlobalStateProviderProps {
  children: React.ReactNode;
}

export interface GlobalContext {
  state: State;
  dispatch: React.Dispatch<any>;
}

export interface Theme {
  value: string;
  text: string;
}

export interface formType {
  journalNote: string;
}

export interface UniqueJournalParams {
  params: {
    journalId: string;
  };
}

export interface mockHistoryItem {
    id: string;
    title: string;
    note: string;
    date: string;
    category: string;
}



export interface mockHistoryData {
  data: mockHistoryItem[],
}
