const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
{
    username:
    {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email:
    {
        type: String,
        unique: true,
        require: true,
        validate:
        {
            validator: function(email)
            {
                const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return emailRegex.test(email);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    thoughts:
    [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends:
    [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON:
    {
        virtuals: true
    },
    id: false
})

UserSchema.virtual('friendCount').get(function()
{
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;