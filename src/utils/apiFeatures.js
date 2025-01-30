class Apifeatures{

    constructor(mongooseQuery,data){
        this.mongooseQuery=mongooseQuery
        this.data=data
    }

    pagination(){
        let {page,limit}=this.data
        if(!limit || limit<=0){
            limit=2
        }
        if(!page || page<=0){
            page = 1
        }
        const skip = ( page -1)*limit
        this.mongooseQuery.limit(limit).skip(skip)
        return this
    }
    sort(){
        if(this.data.sort){
            this.mongooseQuery.sort(this.data.sort.replaceAll(',',''))
            return this
        }
return this
    }
    fields(){
        if(this.data.fields){
            this.mongooseQuery.select(this.data.fields.replaceAll(',',''))
            return this
        }
return this
    }
    search(){
        if(this.data.search){
            this.mongooseQuery.find({
                $or:[
                    {title:{$regex:this.data.search}},
                    {description:{$regex:this.data.search}}
                ]
            })
            return this
        }
return this
    }
    filter() {
        const excludeQuery = ["page", "search", "sort", "select"]
        let filterQuery = { ...this.queryString } 
        excludeQuery.forEach(e => delete filterQuery[e])
        filterQuery = JSON.parse(JSON.stringify(filterQuery).replace(/(gt|lt|gte|lte|eq)/, (match) => `$${match}`))
        this.mongooseQuery.find(filterQuery)
        return this
    }
    
}

export default Apifeatures
