function generatePositionSnippet(){
    const positionBox = document.createElement(
        "div"
    );
    positionBox.classList.add(
        "position-snippet"
    );

    const positionLogo = document.createElement(
        "img"
    );
    positionLogo.setAttribute("src", "../../assets/logo.svg");
    positionLogo.setAttribute("alt", "position logo");
    positionLogo.classList.add("position-logo");

    positionBox.appendChild(positionLogo);

    const positionName = document.createElement(
        "a"
    );
    positionBox.appendChild(positionName);

    const positionCompany = document.createElement(
        "a"
    );
    positionBox.appendChild(positionCompany);

    const positionLocation = document.createElement(
        "a"
    );
    positionBox.appendChild(positionLocation);

    const positionNote = document.createElement(
        "div"
    );
    positionBox.appendChild(positionNote);

    const positionPay = document.createElement(
        "div"
    );
    positionBox.appendChild(positionPay);

    const positionBenefits = document.createElement(
        "div"
    );
    positionBox.appendChild(positionBenefits);

    const positionType = document.createElement(
        "div"
    );
    positionBox.appendChild(positionType);

    const positionDescription = document.createElement(
        "div"
    );
    positionBox.appendChild(
        positionDescription
    );

    const positionsSection = document.getElementById(
        "position-snippets-section"
    );

    return positionsSection.appendChild(
        positionBox
    );
}