import Sequelize  from "sequelize";

const sequelize = new Sequelize (
    "postgres://zqbdibix:OyUoKZBhdOtlRln6I5kFS0cjg0S3K5MY@kesavan.db.elephantsql.com/zqbdibix",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }

)

export default sequelize;