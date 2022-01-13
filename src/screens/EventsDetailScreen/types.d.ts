import { IActor, IRepo } from "_app/store/events/types";

export type TParamList = {
  key: string,
  name: string,
  path: undefined | string,
  params: {
    actor: IActor,
    type: string,
    created_at: string,
    repo: IRepo,
  },
  Symbol(CHILD_STATE): undefined | string,
}