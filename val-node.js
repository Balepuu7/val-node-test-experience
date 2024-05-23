module.exports = function(RED) {
    function ValNodeNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = "Hello Val-node!";
            node.send(msg);
        });
    }
    RED.nodes.registerType("val-node",ValNodeNode);
}