import { FaArrowUp,FaShoppingCart} from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { MdOutlineLocalDining,MdTakeoutDining } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import "./order.css";

function Order(){
    return(
      <div className="navbar">
         <div className="Revenue">
            <div className="row1">
            <h2>Revenue</h2>
            <p id="down"><FaArrowDown />10%</p>
            </div>
            <div className="row2">
            <MdArrowOutward /><p id="pp">$2.047</p>
            </div>
         </div> 
         <div className="orders">
            <div className="row1">
            <h2>Orders</h2>
            <p id="up"><FaArrowUp />20%</p>
            </div>
            <div className="row2">
            <FaShoppingCart /><p id="pp">356</p>
            </div>
         </div>
         <div className="Dine">
            <div className="row1">
            <h2>Dine in</h2>
            <p id="up"><FaArrowUp />10%</p>
            </div>
            <div className="row2">
            <MdOutlineLocalDining /><p id="pp">220</p>
            </div>
         </div>
         <div className="Takeaway">
            <div className="row1">
            <h2>Take away</h2>
            <p id="down"><FaArrowDown />5%</p>
            </div>
            <div className="row2">
           <MdTakeoutDining /> <p id="pp">135</p>
           </div>
         </div>
      </div>
    );
}

export default Order;