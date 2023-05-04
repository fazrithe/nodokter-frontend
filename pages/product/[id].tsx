import SingleProduct from "../../components/product/SingleProduct";
import { useRouter } from 'next/router'

export default function Single(){
    const router = useRouter()
    const { id } = router.query
    const name = id
    return (
        <div>
            <SingleProduct product={name}/>
        </div>
    );
}


// export async function getServerSideProps({ req, res }) {
//     return {
//         props: { id: res }
//     }
// }