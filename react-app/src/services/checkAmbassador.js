export const checkAmbassador = async (userId) => {
    const response = await fetch(`/api/auth/ambassador/`, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    let data = await (response.json())
    return (response.ok) ? true: false
  };