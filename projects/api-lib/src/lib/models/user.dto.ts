import { TokenDto } from './token.dto';
import { UserRoleDto } from './user-role.dto';
import { BaseModelDto } from './base-model.dto' ;
import { AccessItemDto } from './access-item.dto';
import { CustomerInfoDto } from './customer-info.dto';
export class UserDto extends BaseModelDto  {

    constructor(
        public id? : number,
        public name?: string,
        public email?: string,
        public IsActive?:boolean,
        public Description?:string,

        public Email?: string,
        public UserName?: string,
        public Password?: string,
        public CellPhone?:string,
        public BrithDay?: Date,
        public NationalCode?: string,
        public AvatarPerson?:string,
        public RememberMe?:boolean,
        public ConfirmPassword?:boolean,
        public FullName?:string,


        public SoftLevel?:number,
        public CustomerInfo?:CustomerInfoDto,
        
        public token?:TokenDto,
        public AccessKey?:AccessItemDto[],
        

        public UserRoleId?:number,        
        public UserRole?:UserRoleDto,

        
        
    ) { 
        super();
    }
    
    
    
}
