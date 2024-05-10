import React from "react";
import { useEffect, useState } from "react";
import Admin from "../admmain";
import './index.css'
import fetcher from "../../model/fetcher";

const endpoint = "http://localhost:5001/sports"

const fetchdat = new fetcher

function Dashboard() {
    const [sport, setSport] = useState(null);
    const [noProducts, setNoProducts] = useState(null);
    const [sportNo, setSportNo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sportResponse = await fetchdat.sports();
                const productResponse = await fetchdat.products(100);

                setSport(sportResponse.data);
                setNoProducts(productResponse.data.length);

                const prodNo = {};
                productResponse.data.forEach(product => {
                    product.sports.forEach(s => {
                        prodNo[s.name] = (prodNo[s.name] || 0) + 1;
                    });
                });
                setSportNo(prodNo);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Admin>
            <div className="dashboard">
                <div className="no_prod">
                    <p>Number of total products: {noProducts}</p>
                    <div className="prod_no">
                        {sport &&
                            sport.map(e => (
                                <p key={e._id}>
                                    {e.name} : {sportNo[e.name] || 0}
                                </p>
                            ))}
                    </div>
                </div>
                <div className="no_sports">
                    <p>Number of sports: {sport ? sport.length : 0}</p>
                    <div className="sprt">
                        {sport &&
                            sport.map((e, i) => (
                                <div key={e._id}>
                                    <p>
                                        {i + 1} : {e.name}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </Admin>
    );
}

export default Dashboard;
