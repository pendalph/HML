export interface IEventResponse {
  actor: IActor;
  created_at: string;
  id: string;
  org: IOrg;
  payload: IPayload;
  public: boolean;
  repo: IRepo;
  type: string;
}

export interface IOrg {
  avatar_url: string;
  gravatar_id: string;
  id: number;
  url: string;
}

export interface IActor {
  avatar_url: string;
  display_login: string;
  gravatar_id: string;
  id: number;
  login: string;
  url: string;
}

export interface IPayload {
  before: string;
  commits: Array<ICommits>;
  distinct_size: 1;
  head: string;
  push_id: string;
  ref: string;
  size: number;
}

export interface IRepo {
  id: number;
  name: string;
  url: string;
}

export interface ICommits {
  distinct: boolean;
  message: string;
  sha: string;
  url: string;
}

export interface IAuthor {
  email: string;
  name: string;
}