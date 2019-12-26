var TreeUtils = {
		/**
		 * 展开第一个最深子节点，并返回此最深节点
		 */
		expandFirstDepthNode:function(treeObj,node){
			if(!node){
				node = treeObj.getNodes()[0].children;
			}
			treeObj.expandNode(node, true, false, false);
			var nodes = treeObj.getNodesByParam("pId",node.id,node);
			if(nodes && nodes.length>0){
				var newNode = nodes[0];
				if(newNode.isParent){
					return this.expandFirstDepthNode(treeObj,newNode);
				}else{
					return newNode;
				}
			}else{
				return node;
			}
		}
}