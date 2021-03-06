/* Mongoose - Order */
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
	code: String,
	name: String,
	tender_code: String,
	areas: [Schema.Types.Mixed],
	supplier: { code: String, name: String },
	buyer: { code: String, name: String },
	total: Number,
	currency: String,
	created_at: Date,
    state: Number,
    states: [Schema.Types.Mixed],
    items_num: Number,
    items_desc: [Schema.Types.Mixed]
});
OrderSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Order', OrderSchema);
