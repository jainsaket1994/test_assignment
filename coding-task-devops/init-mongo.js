db.createuser(
{
    user: "test",
    pwd: "test",
    roles: [
        {
            role:"readWrite",
            db: "tododb-dev"
        }
    ]
}

)
