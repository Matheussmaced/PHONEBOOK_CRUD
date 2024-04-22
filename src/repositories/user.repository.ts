import { User, UserRepository } from '../interfaces/users.interface'

class UserRepositoryPrisma implements UserRepository {
  async create(data: UserCreate): Promise<User> {}
}

export { UserRepositoryPrisma }
