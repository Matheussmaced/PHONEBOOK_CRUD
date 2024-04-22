import { User, UserCreate, UserRepository } from '../interfaces/users.interface'
import { UserRepositoryPrisma } from '../repositories/user.repository'

export class UserUseCase {
  private userRepository: UserRepository
  constructor() {
    this.UserRepository = new UserRepositoryPrisma()
  }

  async create({ name, email }: UserCreate): Promise<User> {}
}
