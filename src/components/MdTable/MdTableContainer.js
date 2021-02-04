import MdTable from './MdTable'

function processChildren (children, createElement) {
  const slotNames = ['md-table-toolbar', 'md-table-empty-state', 'md-table-pagination']
  let nodes = Array.from(children)
  let namedSlots = {}

  function getTag ({ componentOptions }) {
    return componentOptions && componentOptions.tag
  }

  nodes.forEach((node, index) => {
    if (node && node.tag) {
      const tag = getTag(node)

      if (tag && slotNames.includes(tag)) {
        node.data.slot = tag
        node.data.attrs = node.data.attrs || {}
        namedSlots[tag] = () => node
        nodes.splice(index, 1)
      }
    }
  })

  return {
    childNodes: nodes,
    slots: namedSlots
  }
}

function mutateData (data, props) {
  const {attrs, model } = data
  const {collapseData} = props
  if(model) {
    let keysCollapse = []
    if(collapseData && collapseData.rows) {
      for(let i = 0; i < collapseData.rows.length; i++) {
        keysCollapse = keysCollapse.concat(collapseData.rows[i])
      }
    }
  
    let collapseNewData = model.value.map(item => {
      let newItem = []
      if(collapseData && collapseData.rows) {
        for(let i = 0; i < collapseData.rows.length; i++) {
          let  rowItems = {}
          for(let x = 0; x < collapseData.rows[i].length; x++) {
            rowItems[collapseData.rows[i][x]] = item[collapseData.rows[i][x]]
          }
          newItem.push(rowItems)
        }
      }else{
        return undefined
      }
  
      return newItem
    })
  
    function resolve(path, obj) {
      return path.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : null
      }, obj || self)
    }
  
    let collapseNewDataCode = model.value.map(item => {
      let newItem = {}
  
      if(collapseData && collapseData.codes) {
        for(let i = 0; i < collapseData.codes.length; i++) {
          let objObtained = resolve(collapseData.codes[i].value, item)
          let objTypeName = collapseData.codes[i].type
          newItem[objTypeName] = objObtained
        }
      } else{
        return undefined
      }
  
      return newItem
    })
  
    let newModel = model.value.map(item => {
      if (keysCollapse.length) {
        collapseData.hide.forEach(itemHide => {
          delete item[itemHide]
        })
        keysCollapse.forEach(itemCollapse => {
          delete item[itemCollapse]
        })
        return item
      } else {
        return item
      }
    })
  
    
    return attrs.collapse ? ({
      item: newModel,
      collapseData: {rows: collapseNewData, codes: collapseNewDataCode}
    }) : ({item: model.value})
  } else {
    return ({item: undefined})
  }
  
}

export default {
  name: 'MdTableContainer',
  functional: true,
  render (createElement, { data, props, children }) {
    let slotChildren = []
    let scopedSlots = data.scopedSlots
    let {item: value, collapseData} = mutateData(data, props)

    if (children) {
      const { childNodes, slots } = processChildren(children, createElement)

      slotChildren = childNodes
      scopedSlots = {
        ...scopedSlots,
        ...slots
      }
    }

    return createElement(MdTable, {
      ...data,
      props: {
        ...props,
        value,
        collapseData
      },
      scopedSlots
    }, [slotChildren])
  }
}
