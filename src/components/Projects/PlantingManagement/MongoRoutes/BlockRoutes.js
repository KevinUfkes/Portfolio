import axios from 'axios';

// Get all blocks from collection and return as JSON
export async function getBlocks(){
  const blocksResponse = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/blocks`);
  if (!blocksResponse.ok) {
    const message = `An error occurred: ${blocksResponse.statusText}`;
    window.alert(message);
    return;
  }
  const blocks = await blocksResponse.json();
  return blocks;
}

// Create new block document in Blocks collection
export async function createBlock(block_code, area, density, price, contract) {
  axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/block/create`, {
    block_code: block_code,
    area: area,
    density: density,
    price: price,
    contract: contract,
  }).then(response => {
    console.log(response)
    window.location.reload()
  })
}

// Update block document in Blocks collection
export async function updateBlock(block_id, block_code, area, density, price, contract) {
  axios.put(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/block/update`, {
    _id: block_id,
    data: {
      block_code: block_code,
      area: area,
      density: density,
      price: price,
      contract: contract,
    }
  }).then(response => {
      console.log(response)
      window.location.reload()
  })
}

// Delete block by Id in Blocks collection
export async function deleteBlock(block_id) {
  axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/block/delete`, {
    _id: block_id
  }).then(response => {
    console.log(response)
    window.location.reload()
  })
}