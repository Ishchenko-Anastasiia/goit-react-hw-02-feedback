import styled from 'styled-components';

export const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Button = styled.button`
  padding: 10px; 
  min-width: 300px;
  font-size:20px;
  font-weight:700;
  border-radius: 10px;
  border: 1px solid #565753;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.050);
  transition: background-color 250ms cubic-bezier(0.5, 0, 0.2, 1);
  transform: scale(1);
  text-transform: capitalize;


  &:hover,
  &:focus {
    transform: scale(1.1);
    border: 1px solid #262626;
  }

&:nth-child(1) {
        background-image: linear-gradient( #68db49,#c2d7bc);
      }
    
      &:nth-child(2) {
        background-image: linear-gradient( #269ff0, #bcccd7 );
      }
    
      &:nth-child(3) {
          background-image: linear-gradient( #d87373, #d7bcbc);
      }
`;