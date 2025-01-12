import mysql.connector

def getConnection():
    db = mysql.connector.connect(
        host = "192.168.0.211",
        user="mason",
        password="wolfpack",
        database="nurseapp"
    )
    return db

def executeQuery(query, params):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(query, params)
    columns = cursor.description
    result = []
    for value in cursor.fetchall():
        tmp = {}
        for (index,column) in enumerate(value):
            tmp[columns[index][0]] = column
        result.append(tmp)
    cursor.close()
    conn.close()
    return result

def executeCUD(query, params):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(query, (params))
    conn.commit()
    cursor.close()
    conn.close()