import "../index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Clients from "../components/clients";

function Table_page() {
    const { tableId } = useParams();
    const [clients, setUsers] = useState([]);
    const headers = {
        "Content-Type": "application/json",
        "x-hasura-admin-secret":
        "LOK90YTYrwvGG722wbLUzfFp4G7pXQK7MWqpq8NU5ElsJbHzmO2A96LP1Cb0X1MC",
    };

    useEffect(() => {
        const gettable = async () => {
        const url = `https://dashing-squirrel-63.hasura.app/api/rest/table/${tableId}`;
        await axios
            .get(url, {
            headers: headers,
            })
            .then((res) => {
                console.log(res.data["table"][0].table_clients)
            setUsers(res.data["table"][0].table_clients);
            })
            .catch((err) => {
            alert("Error " + JSON.stringify(err));
            });
        };
        gettable();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex items-center justify-center h-screen">
        <div className="w-3/4 h-3/4 bg-gradient-to-b from-opacity-50 to-opacity-100">
            {clients.map((client) => (
                <li class="h-fit">
                <div>
                    <Clients
                    total_check={client.total_check}
                    />
                </div>
                </li>
            ))}
        </div>
        </div>
    );
}

export default Table_page;
