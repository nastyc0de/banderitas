import React from 'react';
import { Country } from '../Country';
import styled from 'styled-components';


const CountryListStyle  = styled.div`

`

export const CountryList = () => {
    return (
        <div>
            <Country
          flag="https://webfiles1.blob.core.windows.net/cache/b/4/d/e/f/d/b4defdb43fb9a42e62cc796f6a0bd3d18194b34c.png"
          name="Bolivia"
          population={12312312}
          region="América"
          capital="Sucre"
      />
        </div>
    )
}
