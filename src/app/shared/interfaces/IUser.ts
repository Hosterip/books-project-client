export interface IUser {
  id: string
  last: string
  firstName: string
  middleName?: string
  lastName?: string
  role: string,
  avatarName: string | null
}
