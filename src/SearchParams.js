import {useState} from 'react';

const SearchParams = () => {
    const[ breed, Setbreed] = useState("Terrier");
    return (
        <div className="Search-params">
            <form>
                <label htmlFor="breed">
                    <span>Breed</span>
                    <input 
                        id="breed" 
                        value={breed} 
                        onChange = {(e) => Setbreed(e.target.value)}
                        placeholder="Breed" 
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;