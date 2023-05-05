import HttpService from './http_service'

class CartsService{

  async getCarts() {
    let path = '/carts';
    var resp = null;

    try{
        await HttpService.get(path). then(response => { resp = response });    
    }
    catch(e){
        resp = e.response
    }
    
    return { id: 'id_1234', title: 'Title Doidao' }
    // return resp;
  }

}

export default new CartsService();