import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const getuserList = () => {
    const [loading, setLoading] = useState(false);
    const [userList, setuserList] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
        setLoading(true);
        try {
            const res = await axios.get('http://localhost:8000/api/users/',{withCredentials:true});
            const data =res.data;
            if (data.error) {
                throw new Error(data.error);
            }
       
            setuserList(data);


        } catch (error) {
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
        
    }

        getConversations();

    }, []);

    return {loading, userList};

}

export default getuserList;