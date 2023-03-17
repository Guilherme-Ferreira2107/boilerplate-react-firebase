import { IComment } from "./comment.interface";
import { ILike } from "./likes.interface";

export interface IPost {
  id: string;
  body: string;
  username: string;
  createdAt: string;
  likeCount: number;
  commentCount: number;
  title: string;
  autoDiagnostico: boolean;
  comments?: IComment;
  likes?: ILike;
  keywords?: string[];
  autors?: string[];
  active?: boolean;
  dataset?: string;
  diagnosticos?: string[];
}
