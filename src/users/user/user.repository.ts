import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateUserDto } from 'src/users/user/dto/create-user.dto';
import { PureUpdateUserDto } from 'src/users/user/dto/pure-update-user.dto';
import { QueryUserDto } from 'src/users/user/dto/query-user.dto';
import { UserEntity } from 'src/users/user/entities/user.entity';

@Injectable()
export class UserRepository {
  private logger = new Logger(UserRepository.name);
  constructor(private readonly dbService: DbService) {}
  private userDb = this.dbService.user;

  private include = {
    userLabels: {
      include: {
        label: {
          include: {
            labelGroup: true,
          },
        },
      },
    },
  };

  async create(createUserDto: CreateUserDto) {
    return await this.userDb.create({ data: createUserDto });
  }

  async findAll() {
    return await this.userDb.findMany({
      include: this.include,
    });
  }

  async findAllByIds(ids: string[]) {
    return await this.userDb.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      include: this.include,
    });
  }

  async findAllByQuery(query: QueryUserDto) {
    const queryKeys = Object.keys(query);

    const queryKeyValueMap = {
      userLabels: 'labelId',
    };

    const ORarray = queryKeys
      .map((queryKey) => {
        if (typeof query[queryKey] === 'string') {
          return {
            [queryKey]: {
              equals: query[queryKey],
            },
          };
        } else {
          const innerOrArray = query[queryKey].map((item) => {
            if (queryKeyValueMap[queryKey]) {
              return {
                [queryKey]: {
                  some: {
                    [queryKeyValueMap[queryKey]]: {
                      equals: item,
                    },
                  },
                },
              };
            } else {
              return {
                [queryKey]: {
                  equals: item,
                },
              };
            }
          });

          return innerOrArray;
        }
      })
      .flat();

    const users = await this.userDb.findMany({
      where: {
        OR: ORarray,
      },
      include: this.include,
    });

    return users;
  }

  async findOne(id: UserEntity['id']) {
    const user = await this.userDb.findUnique({
      where: { id },
      include: this.include,
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async update(id: UserEntity['id'], updateUserDto: PureUpdateUserDto) {
    await this.userDb.update({
      where: { id },
      data: updateUserDto,
    });

    return this.findOne(id);
  }

  async remove(id: UserEntity['id']) {
    return await this.userDb.delete({
      where: { id },
    });
  }
}
