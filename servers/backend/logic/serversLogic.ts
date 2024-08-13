import dal_mysql from "../DAL/dal_mysql";


const getAllServers = async()=>{
    //SQL statement
    const sql = `
        SELECT servers.*, manufacturer.name FROM servers
        INNER JOIN manufacturer
        ON servers.Hosting_Company = manufacturer.id
    `;
    //execute the sql command
    const servers = await dal_mysql.execute(sql);
    //return the result
    console.log(servers)
    return servers;
}

const updateSeverStatus = async(id:number,status:boolean)=>{
    let datatime = new Date().toJSON().slice(0,19).replace('T', ' ');
    //SQL statement
    const sql = `UPDATE servers SET servers.status=${status}, datatime='${datatime}' WHERE id=${id}`;
    // execute the sql
    // console.log(sql);
    await dal_mysql.execute(sql);
    return;
}

export {
    getAllServers,
    updateSeverStatus
}