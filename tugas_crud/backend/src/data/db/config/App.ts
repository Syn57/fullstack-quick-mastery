// TODO: Learn how to use this file,
export default {
    domains: {
        development: {
            ecommerce: "http://localhost:3002",
        }
    },
    database: {
        tables: ["products"],
    },
    images: {
        logos: {
            ecommerce:
                "https://res.cloudinary.com/dojuhvgl1/image/upload/fl_preserve_transparency/v1739515235/ss-Photoroom_kltglb.jpg",
        },
    },
    paths: {
        migrations: {
            root: "/db",
            apps: ["../apps/skilly-id/migrations", "../apps/phindojo/migrations"],
        },
        seeders: {
            root: "/db",
            apps: ["../apps/skilly-id/seeders", "../apps/phindojo/seeders"],
        },
    },
    response: {
        messages: {
            checkIfUserNotExists: {
                messageFailed: "Invalid username, email, or password",
            },
            checkIfUserExists: {
                messageFailed: "Action cannot be processed",
            },
            verifyToken: {
                messageFailed: "Action cannot be processed",
            },
            resetPassword: {
                messageFailed: "Action cannot be processed",
            },
            checkIfUserActive: {
                messageFailed: "Action cannot be processed",
            },
            checkIfUserHasSysAdminRole: {
                messageFailed: "Action cannot be processed",
            },
        },
    },
};