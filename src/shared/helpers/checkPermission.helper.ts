import { BadRequestException } from '@nestjs/common';
import { User } from '@/modules/user/user.entity';

export class Permission {
  static check(id: number, currentUser: User) {
    if (id === currentUser.id) return;
    if (currentUser.role === 'ADMIN') return;

    throw new BadRequestException('User cannot perform action');
  }
}
