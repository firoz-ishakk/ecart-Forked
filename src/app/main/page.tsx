"use client"
import ItemCard from "@/components/ItemCard";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";
export default function Home() {
   return (
      <div className=" p-[20px]">
         <Input
            placeholder="Search for products"
            size="large"
            style={{ width: "330px", height: "50px", background: "#e6e6e6" }}
            prefix={<CiSearch size={20} onClick={() => alert("jd")} />}
         />
         <div>
            <h4>Electrical Equipments</h4>
            <ItemCard />
         </div>
      </div>
   );
}
