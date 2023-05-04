import { useRouter } from "next/router";
import CategoryProduct from "@/components/product/CategoryProduct";

export default function Category(){
    const router    = useRouter()
    const { id }    = router.query
    const name      = id   
    return(
        <>
            <CategoryProduct cateogry={name}/>
        </>
    );
}