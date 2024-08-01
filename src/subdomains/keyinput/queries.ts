import { gql } from "@apollo/client";

export const FETCH_KEY_INPUTS = gql`
  query getKeyInputs {
    keyInputs {
      id
      generalInformations {
        id
        customerId
        project
        modelVehicle
        country
        productionSite
        quoteDispatchDate
        firstYearOfCAA
        firstSopDate
        currencyId
      }
      team {
        id
        platformManager
        technicalProjectLeader
        purchasingLeader
        processLeader
        financeContributor
        salesLeader
        projectName
        productName
      }
      refs {
        id
        name
        product {
          id
          name
        }
        productId
        bomId
        keyInputsId
      }
      milestones {
        npav
        caav
        prkf
        reqf
        isd
        soco
        ffv
        efv
        desf
        iarv
        afv
        togo
        ofto
        otop
        fdpr
        sssr
        crar
        isva
        sopr
        sop
        prcl
      }
      materialRates {
        id
        aluLME
        aluPremiumYinbang
        aluPremiumAlcha
        aluPremium
        aluMidwestDDU
        aluSHFE
        stampingStockSidePlate
        stampingStockManifolds
        pptv20
        pptv40
        pp54Scolefin
        ppGf30
        pa6Gf30
        pa610
        pa66Gf30
        pa66Gf35
        ppaGf50
        abs
        pom
        tpeShore40
        tpeShore25
        molykoteGrease
        pptv40TpeShore40
        ppC3IndexValue
      }
      currencyRates {
        id
        usd
        cny
        thb
        inr
        pln
        jpy
        brl
        rub
        czk
        try
        mrd
        eur
        krw
        ron
        zar
      }
      currency {
        id
        name
      }
    }
  }
`;

export const CREATE_KEY_INPUT = gql`
  mutation createKeyInput($input: KeyInputFormData!) {
    createKeyInput(input: $input) {
      id
      generalInformations {
        id
        customerId
        project
        modelVehicle
        country
        productionSite
        quoteDispatchDate
        firstYearOfCAA
        firstSopDate
        currencyId
      }
      team {
        id
        platformManager
        technicalProjectLeader
        purchasingLeader
        processLeader
        financeContributor
        salesLeader
        projectName
        productName
      }
      refs {
        id
        name
        product {
          id
          name
        }
        productId
        bomId
        keyInputsId
      }
      milestones {
        npav
        caav
        prkf
        reqf
        isd
        soco
        ffv
        efv
        desf
        iarv
        afv
        togo
        ofto
        otop
        fdpr
        sssr
        crar
        isva
        sopr
        sop
        prcl
      }
      materialRates {
        id
        aluLME
        aluPremiumYinbang
        aluPremiumAlcha
        aluPremium
        aluMidwestDDU
        aluSHFE
        stampingStockSidePlate
        stampingStockManifolds
        pptv20
        pptv40
        pp54Scolefin
        ppGf30
        pa6Gf30
        pa610
        pa66Gf30
        pa66Gf35
        ppaGf50
        abs
        pom
        tpeShore40
        tpeShore25
        molykoteGrease
        pptv40TpeShore40
        ppC3IndexValue
      }
      currencyRates {
        id
        usd
        cny
        thb
        inr
        pln
        jpy
        brl
        rub
        czk
        try
        mrd
        eur
        krw
        ron
        zar
      }
      currency {
        id
        name
      }
    }
  }
`;

export const UPDATE_KEY_INPUT = gql`
  mutation updateKeyInput($input: KeyInputFormData!) {
    updateKeyInput(input: $input) {
      id
      generalInformations {
        id
        customerId
        project
        modelVehicle
        country
        productionSite
        quoteDispatchDate
        firstYearOfCAA
        firstSopDate
        currencyId
      }
      team {
        id
        platformManager
        technicalProjectLeader
        purchasingLeader
        processLeader
        financeContributor
        salesLeader
        projectName
        productName
      }
      refs {
        id
        name
        product {
          id
          name
        }
        productId
        bomId
        keyInputsId
      }
      milestones {
        npav
        caav
        prkf
        reqf
        isd
        soco
        ffv
        efv
        desf
        iarv
        afv
        togo
        ofto
        otop
        fdpr
        sssr
        crar
        isva
        sopr
        sop
        prcl
      }
      materialRates {
        id
        aluLME
        aluPremiumYinbang
        aluPremiumAlcha
        aluPremium
        aluMidwestDDU
        aluSHFE
        stampingStockSidePlate
        stampingStockManifolds
        pptv20
        pptv40
        pp54Scolefin
        ppGf30
        pa6Gf30
        pa610
        pa66Gf30
        pa66Gf35
        ppaGf50
        abs
        pom
        tpeShore40
        tpeShore25
        molykoteGrease
        pptv40TpeShore40
        ppC3IndexValue
      }
      currencyRates {
        id
        usd
        cny
        thb
        inr
        pln
        jpy
        brl
        rub
        czk
        try
        mrd
        eur
        krw
        ron
        zar
      }
      currency {
        id
        name
      }
    }
  }
`;

export const DELETE_KEY_INPUT = gql`
  mutation deleteKeyInput($id: ID!) {
    deleteKeyInput(id: $id) {
      id
    }
  }
`;

export const FETCH_CURRENCIES = gql`
  query getCurrencies {
    currencies {
      id
      name
    }
  }
`;

export const CREATE_CURRENCY = gql`
  mutation createCurrency($input: NewCurrencyInput!) {
    createCurrency(input: $input) {
      id
      name
    }
  }
`;

export const UPDATE_CURRENCY = gql`
  mutation updateCurrency($input: UpdateCurrencyInput!) {
    updateCurrency(input: $input) {
      id
      name
    }
  }
`;

export const DELETE_CURRENCY = gql`
  mutation deleteCurrency($id: ID!) {
    deleteCurrency(id: $id) {
      id
    }
  }
`;

export const FETCH_CUSTOMERS = gql`
  query getCustomers {
    customers {
      id
      name
    }
  }
`;

export const CREATE_CUSTOMER = gql`
  mutation createCustomer($input: NewCustomerInput!) {
    createCustomer(input: $input) {
      id
      name
    }
  }
`;

export const UPDATE_CUSTOMER = gql`
  mutation updateCustomer($input: UpdateCustomerInput!) {
    updateCustomer(input: $input) {
      id
      name
    }
  }
`;

export const DELETE_CUSTOMER = gql`
  mutation deleteCustomer($id: ID!) {
    deleteCustomer(id: $id) {
      id
    }
  }
`;

export const FETCH_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      references {
        id
        name
      }
      boms {
        id
        BOM
        Description
      }
    }
  }
`;

export const FETCH_PRODUCT_BY_ID = gql`
  query getProductById($id: Int!) {
    product(id: $id) {
      id
      name
      references {
        id
        name
      }
      boms {
        id
        BOM
        Description
      }
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation createProduct($input: NewProductInput!) {
    createProduct(input: $input) {
      id
      name
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      id
      name
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: Int!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;
