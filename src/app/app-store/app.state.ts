interface ITab {
  id: number;
  name: string;
  url: string;
}

interface IAppState {
  tabs: ITab[];
}

const InitialAppState = [
  {
    id: 1,
    name: 'Users',
    url:'users'
  },
  {
    id: 1,
    name: 'Users-v2',
    url:'users-v2'
  },
]

export { ITab, IAppState, InitialAppState };
