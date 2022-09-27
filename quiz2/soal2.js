var data = {
    name: 'Bondra',
    nilai:70,
    kelas:'Adonis',
    isLogin:true
    }
    

function updateData(update) {
    const x = {...data,...update};
    data = x; // data menggunakan var jadi tidak terhalang scope
    console.log(data);
}
    
    
    // TEST CASES
console.log(updateData({ isLogin: false }))
    // Output : { name: 'Bondra', nilai: 70, kelas: 'Adonis', isLogin: false }
    
console.log(updateData({nilai: 65, kelas: 'Laravel'}))
    // Output: { name: 'Bondra', nilai: 65, kelas: 'Laravel', isLogin: true }