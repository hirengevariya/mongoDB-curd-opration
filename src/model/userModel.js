const mongoose = require('mongoose');
const moment = require('moment');

// Create Uer Location Schema
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  createdAt: Date,
  updatedAt: Date
});

const User = mongoose.model('user', UserSchema);

module.exports = {
  insert: function (userData) {
    return new Promise(async (resolve) => {
      try {
        const savedData = await new User(userData).save();
        resolve(savedData);
      } catch (error) {
        console.error('Error occurred while inserting document:', error);
        resolve(false);
      }
    });
  },

  getAll: function () {
    return new Promise(async (resolve) => {
      try {
        const data = await User.find({});
        resolve(data || []);
      } catch (error) {
        console.error('Error occurred while retrieving documents:', error);
        resolve([]);
      }
    });
  },

  findById: function (id) {
    return new Promise(async (resolve) => {
      try {
        const data = await User.findById(id);
        resolve(data || []);
      } catch (error) {
        console.error('Error occurred while retrieving documents:', error);
        resolve([]);
      }
    });
  },

  delete: function (id) {
    return new Promise(async (resolve) => {
      try {
        const deletedData = await User.findByIdAndDelete(id);
        resolve(deletedData);
      } catch (error) {
        console.error('Error occurred while deleting document:', error);
        resolve(false);
      }
    });
  },

  update: function (id, data) {
    return new Promise(async (resolve) => {
      try {
        const resData = await this.findById(id);
        if (Object.keys(resData).length > 0) {
          Object.keys(data).forEach(rKey => {
            resData[rKey] = data[rKey];
          });
          resData.updatedAt = moment();
          const savedData = await resData.save();
          resolve(savedData);
        } else {
          resolve(false);
        }
      } catch (error) {
        console.error('Error occurred while updating document:', error);
        resolve(false);
      }
    });
  }

};
