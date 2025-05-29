import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import Button from '../../Button/index';

const HeaderActions = () => {
     return(
        <div>
            <Button variant="icon">
                <HiOutlineShoppingCart/>
            </Button>
            <Button variant="icon">
                <HiOutlineUser/>
            </Button>
        </div>
     )
}

export default HeaderActions;